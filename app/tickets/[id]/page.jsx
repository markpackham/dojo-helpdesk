async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      // set to 0 if you want to disable caching (want super fast tickets)
      revalidate: 30,
    },
  });
  const data = await res.json();
  return data;
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
