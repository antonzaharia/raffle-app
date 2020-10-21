Rails.application.routes.draw do
  resources :carts
  resources :cart_items
  resources :tickets
  resources :answers
  resources :questions
  resources :posts
  resources :users, only: [:create]
  resources :sessions, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
