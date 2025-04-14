<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\WelcomeController;
Route::get('/', [WelcomeController::class, 'index'])->name('home');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
Route::get('/about', function () {
    return Inertia::render('about');
})->name('about')->middleware(['auth', 'verified']);
Route::get('/provider-dashboard', function () {
    return Inertia::render('provider/dashboard');
})->name('provider.dashboard')->middleware(['auth', 'verified']);
Route::get('/client-dashboard', function () {
    return Inertia::render('client/dashboard');
})->name('client.dashboard')->middleware(['auth', 'verified']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
