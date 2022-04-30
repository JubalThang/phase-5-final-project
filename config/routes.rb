Rails.application.routes.draw do
  namespace :api do
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"
  end

  namespace :api do 
    resources :users, only: [:index, :create, :show]
    resources :departments, only: [:index, :create, :show]
    resources :items, only: [:index, :create]
    resources :item_histories, only: [:index]
  end
end
