Rails.application.routes.draw do
  root to: 'home#index'

  resources :boards, only: %i[index create show update destroy] do
    resources :lists, only: %i[create index update]
  end
end
