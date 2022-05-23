Rails.application.routes.draw do
  namespace :api do 
    resources :users, only: [:index, :create]
    resources :departments, only: [:index, :create, :show]
    resources :items, only: [:index, :create, :destroy]
    resources :item_histories, only: [:index]
    
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
    get '/me', to: "users#show"

    get '/members', to: "users#members"
  end
end
