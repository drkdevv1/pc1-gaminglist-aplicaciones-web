export class Game {
    constructor(
        id = 0,
        title = '',
        thumbnail = '',
        short_description = '',
        platform = '',
        publisher = '',
        developer = '',
        release_date='',
        freetogame_profile_url = ''
    ) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.short_description = short_description;
        this.platform = platform;
        this.publisher = publisher;
        this.developer = developer;
        this.release_date = release_date;
        this.freetogame_profile_url = freetogame_profile_url;
    }
}
