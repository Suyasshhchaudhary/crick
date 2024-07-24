# app/controllers/data_controller.rb
class DataController < ApplicationController
  def index
  end

  def create
    RedisData.add(params[:data])
    head :ok
  end
end
