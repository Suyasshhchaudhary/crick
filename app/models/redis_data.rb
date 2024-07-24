# app/models/redis_data.rb
class RedisData
  def self.all
    $redis.lrange("data_list", 0, -1)
  end

  def self.add(data)
    $redis.lpush("data_list", data)
    BroadcastDataJob.perform_later(data)
  end
end
