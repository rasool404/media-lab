export const categories = [
  {
    name: "cars",
    image: "https://cdn-icons-png.flaticon.com/32/89/89102.png",
  },
  {
    name: "fitness",
    image: "https://cdn-icons-png.flaticon.com/512/3997/3997413.png",
  },
  {
    name: "wallpaper",
    image: "https://cdn-icons-png.flaticon.com/32/16/16410.png",
  },
  {
    name: "websites",
    image: "https://cdn-icons-png.flaticon.com/32/1/1198.png",
  },
  {
    name: "photo",
    image: "https://cdn-icons-png.flaticon.com/32/711/711191.png",
  },
  {
    name: "food",
    image: "https://cdn-icons-png.flaticon.com/32/45/45332.png",
  },
  {
    name: "nature",
    image: "https://cdn-icons-png.flaticon.com/512/40/40107.png",
  },
  {
    name: "art",
    image: "https://cdn-icons-png.flaticon.com/32/67/67745.png",
  },
  {
    name: "travel",
    image: "https://cdn-icons-png.flaticon.com/32/723/723955.png",
  },
  {
    name: "quotes",
    image: "https://cdn-icons-png.flaticon.com/32/565/565703.png",
  },
  {
    name: "cats",
    image: "https://cdn-icons-png.flaticon.com/32/812/812211.png",
  },
  {
    name: "dogs",
    image: "https://cdn-icons-png.flaticon.com/512/91/91544.png",
  },
  {
    name: "other",
    image: "https://cdn-icons-png.flaticon.com/512/3388/3388759.png",
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
  return query;
};
