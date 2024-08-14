import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { VariantService } from './variant.service';

const createVariant = catchAsync(async (req: Request, res: Response) => {
  const result = await VariantService.createVariant(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Variant created successfully',
    data: result,
  });
});

const getAllVariants = catchAsync(async (req: Request, res: Response) => {
  const result = await VariantService.getAllVariants();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Variants retrieved successfully',
    data: result,
  });
});

const getVariantById = catchAsync(async (req: Request, res: Response) => {
  const result = await VariantService.getVariantById(req.params.id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Variant not found',
      data:null
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Variant retrieved successfully',
    data: result,
  });
});

const updateVariant = catchAsync(async (req: Request, res: Response) => {
  const result = await VariantService.updateVariant(req.params.id, req.body);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Variant not found',
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Variant updated successfully',
    data: result,
  });
});

const deleteVariant = catchAsync(async (req: Request, res: Response) => {
  const result = await VariantService.deleteVariant(req.params.id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Variant not found',
      data: null,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.NO_CONTENT,
    success: true,
    message: 'Variant deleted successfully',
    data: result,
  });
});

export const VariantController = {
  createVariant,
  getAllVariants,
  getVariantById,
  updateVariant,
  deleteVariant,
};
