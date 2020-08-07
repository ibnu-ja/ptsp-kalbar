<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\Anime
 *
 * @property int $id
 * @property string $title
 * @property string $title_english
 * @property string $title_japanese
 * @property string $type
 * @property float $score
 * @property string $premiered
 * @property string $synopsis
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Episode[] $episodes
 * @property-read int|null $episodes_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Genre[] $genres
 * @property-read int|null $genres_count
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|\Spatie\MediaLibrary\MediaCollections\Models\Media[] $media
 * @property-read int|null $media_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\TitleSynonyms[] $title_synonyms
 * @property-read int|null $title_synonyms_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime wherePremiered($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereSynopsis($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereTitleEnglish($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereTitleJapanese($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Anime whereUpdatedAt($value)
 */
	class Anime extends \Eloquent implements \Spatie\MediaLibrary\HasMedia {}
}

namespace App{
/**
 * App\Episode
 *
 * @property int $id
 * @property string $episode
 * @property int $anime_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read mixed $links_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Link[] $links
 * @property-read int|null $links_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode whereAnimeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode whereEpisode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Episode whereUpdatedAt($value)
 */
	class Episode extends \Eloquent {}
}

namespace App{
/**
 * App\Genre
 *
 * @property int $id
 * @property string $genre
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Anime[] $animes
 * @property-read int|null $animes_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre whereGenre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Genre whereUpdatedAt($value)
 */
	class Genre extends \Eloquent {}
}

namespace App{
/**
 * App\Link
 *
 * @property int $id
 * @property string $link
 * @property string $res
 * @property int $episode_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link whereEpisodeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link whereRes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Link whereUpdatedAt($value)
 */
	class Link extends \Eloquent {}
}

namespace App{
/**
 * App\TitleSynonyms
 *
 * @property int $id
 * @property string $title_synonyms
 * @property int $anime_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms whereAnimeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms whereTitleSynonyms($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\TitleSynonyms whereUpdatedAt($value)
 */
	class TitleSynonyms extends \Eloquent {}
}

namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string|null $name
 * @property int $role
 * @property string $email
 * @property string|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 */
	class User extends \Eloquent implements \Tymon\JWTAuth\Contracts\JWTSubject {}
}

