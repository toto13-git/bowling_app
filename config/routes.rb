Rails.application.routes.draw do
  devise_for :users
  root 'bowlings#index'
  resources :bowlings, only: [:index] do
    collection do
      get :lane
    end
  end
end
