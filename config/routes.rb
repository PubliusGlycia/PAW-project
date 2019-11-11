Rails.application.routes.draw do
  root to: 'home#index'

  resources :boards, only: %i[index create show update destroy]
  
end
