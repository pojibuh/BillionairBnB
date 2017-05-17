Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :create, :show, :destroy]
    resources :bookings, only: [:create, :index]
    resources :reviews, only: [:create, :index]
  end

  get '/*path', to: 'static_pages#root'
end
