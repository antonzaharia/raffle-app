Rails.application.routes.draw do
  resources :carts, only: [:show, :create]
  resources :cart_items, only: [:destroy]
  resources :tickets, only: [:create, :update]
  resources :posts
  resources :users, only: [:create, :show]
  resources :sessions, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
