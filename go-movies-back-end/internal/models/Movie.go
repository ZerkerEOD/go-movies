package models

import "time"

type Movie struct {
	ID          int64     `json:"id"`
	Title       string    `json:"title"`
	Description string    `json:"description"`
	ReleaseDate time.Time `json:"release_date"`
	Runtime     int64     `json:"runtime"`
	MPAARating  string    `json:"mpaa_rating"`
	Image       string    `json:"image"`
	CreatedAt   time.Time `json:"-"`
	UpdatedAt   time.Time `json:"-"`
}
