import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

import sendResponse from '../../utils/sendResponse';
import { TertiaryCategoryService } from './tertiary.service';


const createTertiaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TertiaryCategoryService.createTertiaryCategory(
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Tertiary category created successfully',
      data: result,
    });
  },
);

const getAllTertiaryCategories = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TertiaryCategoryService.getAllTertiaryCategories();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tertiary categories retrieved successfully',
      data: result,
    });
  },
);

const getTertiaryCategoryById = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TertiaryCategoryService.getTertiaryCategoryById(
      req.params.id,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Tertiary category not found',
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tertiary category retrieved successfully',
      data: result,
    });
  },
);

const updateTertiaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TertiaryCategoryService.updateTertiaryCategory(
      req.params.id,
      req.body,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Tertiary category not found',
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tertiary category updated successfully',
      data: result,
    });
  },
);

const deleteTertiaryCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await TertiaryCategoryService.deleteTertiaryCategory(
      req.params.id,
    );
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Tertiary category not found',
        data: null,
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.NO_CONTENT,
      success: true,
      message: 'Tertiary category deleted successfully',
      data: null,
    });
  },
);

export const TertiaryCategoryController = {
  createTertiaryCategory,
  getAllTertiaryCategories,
  getTertiaryCategoryById,
  updateTertiaryCategory,
  deleteTertiaryCategory,
};
