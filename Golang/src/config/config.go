/*
 * @Description:
 * @Author: xiaoHao
 */
/*
 * @Author: xiaoHao
 */
/*
 * @Author: xiaoHao
 */

package config

import (
	"fmt"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

// const (
//
//	UserName = "root"
//	PassWord = "123456"
//	IP       = "127.0.0.1"
//	Port     = "3306"
//	dbName   = "loginmysql"
//
// )
func StartDb() *gorm.DB {
	// var dsn = "root:Ak47ak47!@tcp(127.0.0.1:3306)/golang_demo?charset=utf8mb4&parseTime=true&loc=Local"
	var dsn = "root:123456@tcp(127.0.0.1:3306)/golang_demo?charset=utf8mb4&parseTime=true&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		// 表名和结构体同步 不加s
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})
	fmt.Println(err)
	sqlDB, err := db.DB()

	// SetMaxIdleConns 设置空闲连接池中连接的最大数量
	sqlDB.SetMaxIdleConns(10)

	// SetMaxOpenConns 设置打开数据库连接的最大数量。
	sqlDB.SetMaxOpenConns(100)

	// SetConnMaxLifetime 设置了连接可复用的最大时间。
	sqlDB.SetConnMaxLifetime(10 * time.Second)

	return db

}
