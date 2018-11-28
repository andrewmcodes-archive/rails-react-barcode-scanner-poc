# frozen_string_literal: true

Rails.application.routes.draw do
  get "welcome/index"
  root "welcome#index"
  namespace :api do
    namespace :v1 do
     resources :products, only: [:index, :create, :destroy, :update, :show]
    end
  end
end
