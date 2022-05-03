package main

import (
	"authServer/server"
	"fmt"
	"log"
)

func main() {

	fmt.Println("Start server")
	var server = server.InitRouter()
	err := server.Run("0.0.0.0:8089")
	if err != nil {
		log.Fatal("Server error")
	}

}
