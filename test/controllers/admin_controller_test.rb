require 'test_helper'

class AdminControllerTest < ActionController::TestCase
  test "should get dashboard" do
    get :dashboard
    assert_response :success
  end

  test "should get items" do
    get :items
    assert_response :success
  end

  test "should get settings" do
    get :settings
    assert_response :success
  end

end
