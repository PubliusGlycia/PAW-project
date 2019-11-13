# frozen_string_literal: true

class CardsController < ApplicationController
  def index
    @list = List.find(params[:list_id])
    @board = @list.board
    @cards = @list.cards.order(created_at: :desc)
    respond_to do |format|
      format.json do
        render json: @cards
      end
    end
  end
end
