Rails.application.routes.draw do
  devise_for :users
  resources :pages

  root to: 'home#index'

  resources :boards, only: %i[index create update destroy] do
    resources :lists, only: %i[index create update destroy]
  end
  
end
