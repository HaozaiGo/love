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

	"myBack/src/model"

	"github.com/gin-gonic/gin"
)

var db = config.StartDb()

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

	fmt.Printf(id)

}

func UploadApi(ctx *gin.Context) {
	f, err := ctx.FormFile("file")
	fmt.Println("filesize :=", f.Size)
	if err != nil {
		ctx.JSON(200, gin.H{
			"message": "上传失败",
		})
	} else {
		dst := path.Join("../static/", f.Filename)

		fmt.Println("dst", dst)
		// 保存文件
		res := ctx.SaveUploadedFile(f, dst)
		fmt.Println("res", res)
		ctx.JSON(200, gin.H{
			"msg":  "上传成功",
			"name": f.Filename,
			"size": f.Size,
		})
	}
}
