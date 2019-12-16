class CommentController < ApplicationController
    before_action :set_comment, only: %i[update destroy]
    def index
      @card = Card.find(params[:card_id])
      @comment = @card.comments.order(created_at: :desc)
      respond_to do |format|
        format.json do
          render json: @comment
        end
      end
    end
  
    def create
      comment = Comment.create(comment_params)
      respond_to do |format|
        format.json do
          render json: comment
        end
      end
    end
  
    def update
      @comment.update(comment_params)
      render json: @comment
    end
  
    def destroy
      @comment.destroy
      render json: @comment
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:comment, :email, :card_id)
    end
  
    def set_comment
      @comment = Comment.find(params[:id])
    end
end
