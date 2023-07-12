import { UserList } from "../user/UserList";
import { UserPresenter } from "../user/user.presenter";

async function getData() {
  const userPresenter = new UserPresenter();
  let viewModel = [];

  await userPresenter.load((vm) => {
    viewModel = vm;
  });

  return viewModel;
}

export default async function Page() {
  const viewModel = await getData();

  return (
    <>
      <article>
        <UserList viewModel={viewModel} />
      </article>
    </>
  );
}
