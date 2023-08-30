/*
 * @Author: xiaoHao
 */
/*
 * @Author: xiaoHao
 */
package service

import (
	"fmt"
	"myBack/src/config"
	"path"
	"strconv"

	"myBack/src/model"

	"github.com/gin-gonic/gin"
)

var db = config.StartDb()

// 添加事件
func AddMatter(ctx *gin.Context) {
	var data model.Thing

	db.AutoMigrate(&data)

	err := ctx.ShouldBindJSON(&data)
	if err != nil {
		ctx.JSON(200, gin.H{
			"msg":  "添加失败",
			"code": 500,
		})
	} else {
		db.Create(&data)
		ctx.JSON(200, gin.H{
			"msg":  "添加成功",
			"code": 200,
		})
	}

}

// 查事件列
func FindMatter(ctx *gin.Context) {
	var dataList []model.Thing

	res := db.Find(&dataList)

	if len(dataList) == 0 {
		ctx.JSON(200, gin.H{
			"msg":  "没有查到数据",
			"code": 400,
			"data": gin.H{},
		})
	} else {
		ctx.JSON(200, gin.H{
			"msg":  "查询成功",
			"code": 200,
			"data": gin.H{
				"list": dataList,
			},
		})
	}
	fmt.Println(res)

}

// 完成事件操作
func DoneMatter(ctx *gin.Context) {
	var data model.Thing

	id := ctx.Param("id")
	db.Select("id").Where("id = ?", id).Find(&data)

	if data.ID == 0 {
		ctx.JSON(200, gin.H{
			"msg":  "用户id没找到",
			"code": 500,
		})
	} else {
		db.Model(&data).Where("id = ?", id).Update("HadDone", true)
		ctx.JSON(200, gin.H{
			"code": 200,
			"msg":  "修改成功",
			"data": data,
		})

	}

	fmt.Println(id)

}

// 删除事件
func DeleteMatter(ctx *gin.Context) {
	var data model.Thing
	id := ctx.Param("id")

	db.Select("id").Where("id = ?", id).Find(&data)

	if data.ID == 0 {
		ctx.JSON(200, gin.H{
			"msg":  "用户id没找到",
			"code": 500,
		})
	} else {
		db.Delete(&data)
		ctx.JSON(200, gin.H{
			"code": 200,
			"msg":  "删除成功",
			"data": data,
		})
	}

}

// 上传图片
func UploadApi(ctx *gin.Context) {
	f, err := ctx.FormFile("file")
	fmt.Println("filesize :=", f.Size)
	if err != nil {
		ctx.JSON(200, gin.H{
			"code":    500,
			"message": "上传失败",
		})
	} else {
		dst := path.Join("./static/", f.Filename)

		fmt.Println("dst", dst)
		// 保存文件
		res := ctx.SaveUploadedFile(f, dst)
		fmt.Println("res", res)
		ctx.JSON(200, gin.H{
			"code": 200,
			"msg":  "上传成功",
			"name": f.Filename,
			"size": f.Size,
		})
	}
}

// 上传美好时刻
func UpLoadBeautyTime(ctx *gin.Context) {
	var data model.BeautyTime

	db.AutoMigrate(&data)

	err := ctx.ShouldBindJSON(&data)

	if err != nil {
		ctx.JSON(200, gin.H{
			"msg":  "添加失败",
			"code": 500,
		})
	} else {
		db.Create(&data)

		ctx.JSON(200, gin.H{
			"msg":  "添加成功",
			"code": 200,
		})
	}
}

func GetBeautyTimeList(ctx *gin.Context) {
	var dataList []model.BeautyTime

	res := db.Find(&dataList)

	if res.RowsAffected == 0 {
		ctx.JSON(200, gin.H{
			"msg":  "没有查到数据",
			"code": 400,
			"data": gin.H{},
		})
	} else {
		ctx.JSON(200, gin.H{
			"msg":  "查询成功",
			"code": 200,
			"data": gin.H{
				"list": dataList,
			},
		})
	}
}

// DeleteBeautyTime 删除美好时刻
func DeleteBeautyTime(ctx *gin.Context) {
	var data model.BeautyTime
	id := ctx.Param("id")
	db.Select("id").Where("id = ?", id).Find(&data)

	if data.ID == 0 {
		ctx.JSON(200, gin.H{
			"msg":  "用户id没找到",
			"code": 500,
		})
	} else {
		db.Delete(&data)
		ctx.JSON(200, gin.H{
			"code": 200,
			"msg":  "删除成功",
			"data": data,
		})
	}
}

// 上传想说的话
func WantToSay(ctx *gin.Context) {
	var data model.TellMe
	db.AutoMigrate(&data)
	err := ctx.ShouldBindJSON(&data)
	if err != nil {
		ctx.JSON(200, gin.H{
			"msg":  "添加失败",
			"code": 500,
		})
	} else {
		db.Create(&data)
		ctx.JSON(200, gin.H{
			"msg":  "添加成功",
			"code": 200,
		})
	}
}

func GetSayInfo(ctx *gin.Context) {
	myGril, err := strconv.ParseBool(ctx.Query("MyGril"))
	fmt.Println(myGril)
	fmt.Println(err)

	var dataList []model.TellMe

	if !myGril {
		// 自己可看全部
		res := db.Find(&dataList)

		if res.RowsAffected == 0 {
			ctx.JSON(200, gin.H{
				"msg":  "没有查到数据",
				"code": 400,
				"data": gin.H{},
			})
		} else {
			ctx.JSON(200, gin.H{
				"msg":  "查询成功",
				"code": 200,
				"data": gin.H{
					"list": dataList,
				},
			})
		}
	} else {
		// myGril can see
		res := db.Not("my_gril = ?", "1").Find(&dataList)

		if res.RowsAffected == 0 {
			ctx.JSON(200, gin.H{
				"msg":  "没有查到数据",
				"code": 400,
				"data": gin.H{},
			})
		} else {
			ctx.JSON(200, gin.H{
				"msg":  "查询成功",
				"code": 200,
				"data": gin.H{
					"list": dataList,
				},
			})
		}
	}

}
