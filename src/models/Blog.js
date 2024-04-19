export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
    }
}

/**
 *
 * {
    "_id": "65e166478752257c6ea5ce5f",
    "title": "My time with codeworks...",
    "body": "",
    "imgUrl": "https://plus.unsplash.com/premium_photo-1674086524511-567ad049a61a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "tags": [],
    "published": true,
    "creatorId": "65cbfb73b554c64939b75c31",
    "createdAt": "2024-03-01T05:23:19.838Z",
    "updatedAt": "2024-03-01T05:23:19.838Z",
    "__v": 0,
    "creator": {
        "_id": "65cbfb73b554c64939b75c31",
        "subs": [
            "auth0|65cbfb7252c91b9419fb1450"
        ],
        "email": "jchav5601@gmail.com",
        "name": "Joaquin",
        "picture": "https://i.pinimg.com/originals/a3/d5/5a/a3d55a828d612f49efee4e23f3b14110.jpg",
        "bio": "Just student at codeworks doing cool code stuff",
        "coverImg": "https://codeworks.blob.core.windows.net/public/assets/ads/SquareAdTaskMaster.png",
        "github": "https://github.com",
        "linkedin": "https://linkedin.com",
        "resume": "https://github.com",
        "class": "Winter 24",
        "graduated": true,
        "createdAt": "2024-02-13T23:30:02.002Z",
        "updatedAt": "2024-03-04T18:01:56.646Z",
        "__v": 0,
        "id": "65cbfb73b554c64939b75c31"
    },
    "id": "65e166478752257c6ea5ce5f"
}
 *
 */