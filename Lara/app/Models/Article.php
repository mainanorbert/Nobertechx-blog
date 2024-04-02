<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    use HasFactory;

    protected $fillable=[
        'title',
        'article',
        'user_id',
        'category',
        'image'
    ];

    public function getRouteKeyName(){
        return 'title';
    }
    public function users(){
        return $this->belongsTo(User::class);
    }
}
