export default function PracticeUser({ user }) {
  console.log(user);
  const { name, company, address } = user;
  return (
    <div className="card">
      <h4>Name : {name}</h4>
      <h5>Company : {company.name}</h5>
      <p>Address : {address.city}</p>
    </div>
  );
}
