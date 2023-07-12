import { Observable } from "../shared/Observable";
import { getUsersStub } from "../shared/stubs/user.stub";
import { UserPresenter } from "./user.presenter";
import UserRepository from "./user.repository";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./user/user.feature");

defineFeature(feature, (test) => {
  let getStub = null;

  beforeEach(async () => {
    UserRepository.programmersModel = new Observable([]);

    UserRepository.gateway.get = jest.fn().mockImplementation(() => {
      getStub = getUsersStub();

      return Promise.resolve(getStub);
    });
  });

  test("Load users on page load", async ({ given, when, then }) => {
    let viewModel = null;

    given("The ViewModel is an empty array or null", () => {
      viewModel = [];
    });

    when("UserPresenter loads data from UserRepository", async () => {
      const userPresenter = new UserPresenter();

      await userPresenter.load((result) => (viewModel = result));
    });

    then("The ViewModel updates, allowing me to see my lists of users", () => {
      expect(viewModel.length).toEqual(3);
      expect(viewModel[1].firstName).toBe("John");
    });
  });
});
