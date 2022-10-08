/*
 * @Author: xiaoHao
 */
package action

import (
	"fmt"
	"log"
	"net/http"
)

func StartUp() {
	log.Println("strating....")
	Register()
	hp := http.ListenAndServe(":8081", nil)
	if hp != nil {
		log.Fatal("start fail")
	}
}

func Register() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("menu", menuHandler)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Form) //这些信息是输出到服务器端的打印信息
	fmt.Println("path", r.URL.Path)
	// var res map[string]interface{}
	sq1 := new(Square)
	sq1.side = "xiaoA"

	var areaIntf indexRes
	areaIntf = sq1

	// fmt.Printf("The square has area: %f\n", areaIntf.Area())
	fmt.Fprintf(w, areaIntf.Area())

}

func menuHandler(w http.ResponseWriter, r *http.Request) {}

type indexRes interface {
	// Name(n string) string
	// code(c string) string
	Area() string
}
type Square struct {
	side string
}

func (sq *Square) Area() string {
	return sq.side
}
