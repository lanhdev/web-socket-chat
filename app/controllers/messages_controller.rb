class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.new message_params
    if @message.save
      redirect_to root_path, flash: {success: 'Message sent'}
    else
      redirect_to root_path, flash: {error: 'Error while sending'}
    end
  end

  private
    def message_params
      params.require(:message).permit(:body)
    end
end
