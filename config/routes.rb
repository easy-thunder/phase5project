Rails.application.routes.draw do
  resources :admins, only: [:create, :index]
  resources :supports, only: [:create, :destroy]
  resources :events
  resources :main_images
  resources :user_services, only:[:show, :index, :create, :destroy]
  resources :services, only:[:show, :index, :update, :destroy, :create]
  resources :users, only:[:update, :destroy, :index]
  resources :photos, only: [:new, :create, :index, :edit, :update]
  resources :orders
  resources :config, only:[:index]
  # resources :payment_intent, only:[:create]
  post '/webhooks', to: "webhooks#create"
  post '/create_payment_intent', to: "payment_intent#create_payment_intent"

  # get '/secret', to: "payment_intent#secret"
get "/supports/:user_id", to: "supports#index"
get"/admins/:email/:password", to: "admin#show"


  post "/login", to: "sessions#create"

  get "/users/:id/confirm_payment", to: "users#confirm_payment"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  # Defines the root path route ("/")
  # root "articles#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  delete "/users/:user_id/services/:id", to: "users#service_delete"
end
