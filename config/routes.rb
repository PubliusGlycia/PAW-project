Rails.application.routes.draw do
  resources :pages

  root to: 'home#index'

  resources :boards
end
