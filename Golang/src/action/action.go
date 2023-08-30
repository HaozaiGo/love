/*
 * @Author: xiaoHao
 */
/*
 * @Author: xiaoHao
 */
package action

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"myBack/src/config"
	"myBack/src/middleware"
	"myBack/src/service"
)

func StartUp() {
	var db = config.StartDb()

	// 给结构体添加gorm.Model
	type User struct {
		gorm.Model
		Name    string
		State   string
		Phone   string
		Email   string
		Address string
	}

	db.AutoMigrate(&User{})

	// 接口
	r := gin.Default()

	// 静态文件夹
	r.StaticFS("/static", http.Dir("./static"))

	r.Use(middleware.Cors())

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	// 新增期待事件
	r.POST("/matter/add", service.AddMatter)

	// 事件列表查询
	r.GET("/matter/list", service.FindMatter)

	// 事件列表完成
	r.POST("/matter/done/:id", service.DoneMatter)

	// 删除事件
	r.DELETE("/matter/delete/:id", service.DeleteMatter)

	// 上传美好时刻图片
	r.POST("/upLoad/beauty", service.UploadApi)

	// 上传美好时刻
	r.POST("/beautyTime", service.UpLoadBeautyTime)
	// 获取美好时刻
	r.GET("/getBeautyTime", service.GetBeautyTimeList)
	// 删除美好时刻
	r.DELETE("/deleteBeautyTime/:id", service.DeleteBeautyTime)

	// 想说的话
	r.POST("/writeWantSay", service.WantToSay)

	r.GET("/getSayList", service.GetSayInfo)

	// 增
	r.POST("/user/add", func(ctx *gin.Context) {
		var data User
		err := ctx.ShouldBindJSON(&data)

		if err != nil {
			ctx.JSON(200, gin.H{
				"msg":  "添加失败",
				"code": 400,
			})
		} else {

			db.Create(&data)

			ctx.JSON(200, gin.H{
				"msg":  "添加成功",
				"code": 200,
			})
		}
	})

	// 删

	r.DELETE("/user/delete/:id", func(ctx *gin.Context) {
		var data []User

		id := ctx.Param("id")

		db.Where("id = ?", id).Find(&data)

		if len(data) == 0 {
			ctx.JSON(200, gin.H{
				"msg":  "id没有找到，删除失败",
				"code": 500,
			})
		} else {
			db.Where("id = ?", id).Delete(&data)

			ctx.JSON(200, gin.H{
				"msg":  "删除成功",
				"code": 200,
			})
		}

	})

	// 改
	r.PUT("/user/update/:id", func(ctx *gin.Context) {
		var data User

		id := ctx.Param("id")

		db.Select("id").Where("id = ?", id).Find(&data)

		if data.ID == 0 {
			ctx.JSON(200, gin.H{
				"msg":  "用户id没找到",
				"code": 500,
			})
		} else {
			err := ctx.ShouldBindJSON(&data)

			if err != nil {
				ctx.JSON(200, gin.H{
					"msg":  "修改失败",
					"code": 500,
				})
			} else {
				db.Where("id = ? ", id).Updates(&data)

				ctx.JSON(200, gin.H{
					"msg":  "修改成功",
					"code": 200,
				})
			}

		}

	})
	// 条件查
	r.GET("/user/list/:name", func(ctx *gin.Context) {
		name := ctx.Param("name")

		var dataList []User

		db.Where("name = ?", name).Find(&dataList)

		if len(dataList) == 0 {
			ctx.JSON(200, gin.H{
				"msg":  "没有查询到数据",
				"code": 400,
				"data": gin.H{},
			})
		} else {
			ctx.JSON(200, gin.H{
				"code": 200,
				"data": dataList,
			})
		}
	})

	r.GET("/user/list", func(ctx *gin.Context) {
		var dataList []User

		var total int64

		pageNum, _ := strconv.Atoi(ctx.Query("pageNum"))
		pageSize, _ := strconv.Atoi(ctx.Query("pageSize"))

		if pageNum == 0 {
			pageNum = -1
		}
		if pageSize == 0 {
			pageSize = -1
		}

		offsetVal := (pageNum - 1) * pageSize

		if pageNum == -1 && pageSize == -1 {
			offsetVal = -1
		}

		db.Model(dataList).Count(&total).Limit(pageSize).Offset(offsetVal).Find(&dataList)

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
					"list":  dataList,
					"total": total,
				},
			})
		}
	})

	PORT := "3001"
	r.Run(":" + PORT)
}
