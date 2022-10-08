/*
 * @Author: xiaoHao
 */
package action

import (
	"fmt"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"

	"myBack/src/middleware"
)

// const (
// 	UserName = "root"
// 	PassWord = "123456"
// 	IP       = "127.0.0.1"
// 	Port     = "3306"
// 	dbName   = "loginmysql"
// )

func StartUp() {

	dsn := "root:123456@tcp(127.0.0.1:3306)/golang_demo?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		// 表名和结构体同步 不加s
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})

	fmt.Println(db)
	fmt.Println(err)

	sqlDB, err := db.DB()

	// SetMaxIdleConns 设置空闲连接池中连接的最大数量
	sqlDB.SetMaxIdleConns(10)

	// SetMaxOpenConns 设置打开数据库连接的最大数量。
	sqlDB.SetMaxOpenConns(100)

	// SetConnMaxLifetime 设置了连接可复用的最大时间。
	sqlDB.SetConnMaxLifetime(10 * time.Second)

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

	r.Use(middleware.Cors())

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

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