Rails.application.routes.draw do
  root to: 'homepage#index'
  get 'meals', to: 'meals#index'
end
