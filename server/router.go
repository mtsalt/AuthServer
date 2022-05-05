package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// https://news.mynavi.jp/techplus/article/gogogo-17/

func InitRouter() *gin.Engine {
	router := gin.Default()
	router.LoadHTMLGlob("templates/*.html")
	router.Static("static", "static")

	// Get request list
	router.GET("/", indexPage)
	router.GET("register", registerPage)
	router.GET("signin", signinPage)
	router.GET("forgot_password", forgotPasswordPage)

	// Post request list
	router.POST("/register", register)
	router.POST("/signin", signin)

	return router
}

// Get request func
func indexPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "index.html", gin.H{})
}

func registerPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "register.html", gin.H{})
}

func signinPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "signin.html", gin.H{})
}

func forgotPasswordPage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "forgotpassword.html", gin.H{})
}

// Post request func
type registerData struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Passowrd string `json:"password"`
}

func register(ctx *gin.Context) {
	var data registerData
	ctx.BindJSON(&data)

	//CreateAccount()

	// return response to client
	ctx.String(http.StatusOK, data.Username+" "+data.Email+" "+data.Passowrd)
}

func signin(ctx *gin.Context) {
	// get body from client
	ctx.String(http.StatusOK, "signin")
}
