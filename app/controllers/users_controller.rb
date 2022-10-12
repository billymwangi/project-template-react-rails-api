class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

     # POST /users
     def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else 
            render json: { errors: user.errors.full_messages },
                   status: :unprocessable_entity
        end
    end

     # AUTHENTICATE USER
     def login
        user = User.find_by(email:params[:email])

        # validate that the user exists
        if user && user.authenticate(params[:password])
            token = encode_token({id: user.id})
            render json: { user: user, token: token }, status: :ok
        else
            render json: { error: 'Invalid email or password'}, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.permit(
            :name, :email, :username, :password, :password_confirmation
        )
    end

    
end
