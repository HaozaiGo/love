/*
 * @Author: xiaoHao
 */
package model

import "gorm.io/gorm"

// 主要字段要用大写
type Thing struct {
	gorm.Model
	HadDone bool
	Matter  string
}
