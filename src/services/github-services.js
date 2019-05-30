
export default class GitHubServices {

  _apiBase = `https://api.github.com/search/users?q=location:cherkassy+language:javascript`;

  getResource = async () => {
    const res = await fetch(this._apiBase);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`)
    }

    return await res.json();
  };

  getAllUsers = async () => {
    const res = await this.getResource();
    const items = await Promise.all(res.items.map(item => {
      return fetch(`https://api.github.com/users/${item.login}`)
        .then(res => res.json())
        .catch(error => console.log(error))
    }));
    return items.map(this._transformUsers);
  };

  _transformUsers = (user) => {
    return {
      id: user.id,
      name: user.name,
      login: user.login,
      imgUrl: user.avatar_url,
      biography: user.bio,
      pageUrl: user.html_url,
      location: user.location,

    }
  }
}

