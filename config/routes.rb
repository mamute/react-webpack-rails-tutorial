Rails.application.routes.draw do
  root "pages#index"
  get "react-router(/*all)", to: "pages#index"
  get "simple", to: "pages#simple"

  resources :comments
end
