import  User  from "@models/user";

test('it should be ok', () => {
  const user = new User();
  user.name = 'Gabriel';

  expect(user.name).toEqual('Gabriel');
});
