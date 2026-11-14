function ProfileCard({ user }) {
  return (
    <section className="profile-card">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="avatar"
      />

      <h2>{user.name || user.login}</h2>
      <p className="username">@{user.login}</p>

      {user.bio && <p className="bio">{user.bio}</p>}

      <div className="details">
        <p><strong>Location:</strong> {user.location || "Not provided"}</p>
        <p><strong>Company:</strong> {user.company || "Not provided"}</p>
      </div>

      <div className="stats">
        <div>
          <strong>{user.public_repos}</strong>
          <span>Repositories</span>
        </div>

        <div>
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="profile-link"
      >
        View GitHub Profile
      </a>
    </section>
  );
}

export default ProfileCard;