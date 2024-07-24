class BroadcastDataJob < ApplicationJob
  queue_as :default

  def perform(data)
    ActionCable.server.broadcast "data_channel", data: data
  end
end
