const getSynopsisUrl = (memberId) =>
`https://members-api.parliament.uk/api/Members/${memberId}/Synopsis`;

const getVotingUrl = (memberId) =>
`https://members-api.parliament.uk/api/Members/${memberId}/Voting?house=1`;

const getMemberUrl = (name) =>
`https://members-api.parliament.uk/api/Members/Search?Name=${name}&skip=0&take=20`;

const getPhotoUrl = (memberId) =>
`https://members-api.parliament.uk/api/Members/${memberId}/ThumbnailUrl`;

const HREF = `https://members.parliament.uk`

const getParliamentMemberId = (name) => {
    return new Promise((resolve, reject) => {
        fetch(getMemberUrl(name))
            .then((response) => response.json())
            .then((data) => {
                if (data && data.items && data.items.length > 0) {
                    resolve(data.items[0].value.id);
                }
            })
            .catch((err) => reject(err));
    });
};


const getPhoto = (memberId) => {
    return new Promise((resolve, reject) => {
        fetch(getPhotoUrl(memberId))
        .then((response) => response.json())
        .then((data) => {
            resolve(data.value);
        })
        .catch((err) => reject(err));
    });
};


const getSynopsis = (memberId) => {
    return new Promise((resolve, reject) => {
        fetch(getSynopsisUrl(memberId))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            resolve(data.value);
        })
        .catch((err) => reject(err));
    });
};