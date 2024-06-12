<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\PatientController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get('patients' ,  [PatientController::class, 'index']);
Route::post('patients' ,  [PatientController::class, 'store']);
Route::get('patients/{id}', [PatientController::class, 'show']);
Route::get('patients/{id}/edit', [PatientController::class, 'edit']);
Route::put('patients/{id}/edit', [PatientController::class, 'update']);
Route::delete('patients/{id}/delete', [PatientController::class, 'destroy']);