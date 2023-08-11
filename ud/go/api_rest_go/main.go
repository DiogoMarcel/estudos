package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type address struct {
	City  string `json:"city,omitempty"`
	State string `json:"state,omitempty"`
}

type person struct {
	ID        string   `json:"id,omitempty"`
	Firstname string   `json:"firstname,omitempty"`
	Lastname  string   `json:"lastname,omitempty"`
	Address   *address `json:"address,omitempty"`
}

var people []person

//func is getpeople...
func GetPeople(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(people)
}

func GetPerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for _, item := range people {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&person{})
}

func CreatePerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var person person
	_ = json.NewDecoder(r.Body).Decode(&person)
	person.ID = params["id"]
	people = append(people, person)
	json.NewEncoder(w).Encode(people)
}

func DeletePerson(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range people {
		if item.ID == params["id"] {
			people = append(people[:index], people[index+1:]...)
			break
		}
		json.NewEncoder(w).Encode(people)
	}
}

// função principal
func main() {
	people = append(people, person{ID: "1", Firstname: "John", Lastname: "Doe", Address: &address{City: "City X", State: "State X"}})
	people = append(people, person{ID: "2", Firstname: "Koko", Lastname: "Doe", Address: &address{City: "City Z", State: "State Y"}})
	people = append(people, person{ID: "3", Firstname: "Francis", Lastname: "Sunday"})

	router := mux.NewRouter()
	router.HandleFunc("/contato", GetPeople).Methods("GET")
	router.HandleFunc("/contato/{id}", GetPerson).Methods("GET")
	router.HandleFunc("/contato/{id}", CreatePerson).Methods("POST")
	router.HandleFunc("/contato/{id}", DeletePerson).Methods("DELETE")
	log.Fatal(http.ListenAndServe(":8080", router))
}

//{"id":"1","firstname":"John","lastname":"Doe","address":{"city":"City X","state":"State X"}},
//{"id":"2","firstname":"Koko","lastname":"Doe","address":{"city":"City Z","state":"State Y"}},
//{"id":"3","firstname":"Francis","lastname":"Sunday"}
