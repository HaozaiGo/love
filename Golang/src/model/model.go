/*
 * @Author: xiaoHao
 */
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

type BeautyTime struct {
	gorm.Model
	Pic        string
	ActionTime string
	Local      string
	Remark     string
}

type TellMe struct {
	gorm.Model
	MyGril bool
	Msg    string
}
