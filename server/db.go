package server

import (
	"database/sql"
	"log"
)

func connectDB() *sql.DB {
	db, err := sql.Open("postgres", "user=user password=password host=localhost port=5432 dbname=dbname sslmode=disable")
	if err != nil {
		log.Fatalf("Failed to connect database.")
	}
	return db
}

func CreateAccount() {
	db := connectDB()

	defer db.Close()
}

func UpdateAccountInfo() {
	db := connectDB()

	defer db.Close()
}

func ReadAccountInfo() {
	db := connectDB()

	defer db.Close()
}

func DeleteAccount() {
	db := connectDB()

	defer db.Close()
}
