// src/modules/admin/components/ui/LoadingSkeletons.tsx
import { motion } from 'framer-motion';

// Skeleton para License Card
export const LicenseCardSkeleton = () => {
  return (
    <div className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Cliente Info Skeleton */}
        <div className="lg:col-span-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-zinc-700/50 rounded-xl animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-zinc-700/50 rounded w-24 animate-pulse"></div>
              <div className="h-3 bg-zinc-700/30 rounded w-32 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* License Type Skeleton */}
        <div className="lg:col-span-2">
          <div className="h-6 bg-zinc-700/50 rounded-full w-20 animate-pulse"></div>
        </div>

        {/* Token Skeleton */}
        <div className="lg:col-span-4">
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-8 bg-zinc-700/50 rounded-lg animate-pulse"></div>
            <div className="w-8 h-8 bg-zinc-700/30 rounded-lg animate-pulse"></div>
            <div className="w-8 h-8 bg-zinc-700/30 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Status & Date Skeleton */}
        <div className="lg:col-span-2">
          <div className="space-y-2">
            <div className="h-5 bg-zinc-700/50 rounded-full w-16 animate-pulse"></div>
            <div className="h-3 bg-zinc-700/30 rounded w-20 animate-pulse"></div>
          </div>
        </div>

        {/* Actions Skeleton */}
        <div className="lg:col-span-1 text-right">
          <div className="w-8 h-8 bg-zinc-700/50 rounded-lg animate-pulse ml-auto"></div>
        </div>
      </div>
    </div>
  );
};

// Skeleton para Client Card
export const ClientCardSkeleton = () => {
  return (
    <div className="bg-zinc-900/30 backdrop-blur-xl rounded-xl p-6 border border-zinc-800">
      {/* Header Skeleton */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-zinc-700/50 rounded-xl animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-zinc-700/50 rounded w-24 animate-pulse"></div>
            <div className="h-3 bg-zinc-700/30 rounded w-32 animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-5 bg-zinc-700/50 rounded-full w-12 animate-pulse"></div>
          <div className="w-6 h-6 bg-zinc-700/30 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Contact Info Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-zinc-700/30 rounded animate-pulse"></div>
          <div className="h-3 bg-zinc-700/50 rounded flex-1 animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-zinc-700/30 rounded animate-pulse"></div>
          <div className="h-3 bg-zinc-700/50 rounded w-32 animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-zinc-700/30 rounded animate-pulse"></div>
          <div className="h-3 bg-zinc-700/50 rounded w-28 animate-pulse"></div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center space-y-1">
          <div className="h-6 bg-zinc-700/50 rounded w-8 mx-auto animate-pulse"></div>
          <div className="h-3 bg-zinc-700/30 rounded w-16 mx-auto animate-pulse"></div>
        </div>
        <div className="text-center space-y-1">
          <div className="h-6 bg-zinc-700/50 rounded w-16 mx-auto animate-pulse"></div>
          <div className="h-3 bg-zinc-700/30 rounded w-20 mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Dates Skeleton */}
      <div className="space-y-1 mb-4">
        <div className="flex justify-between">
          <div className="h-3 bg-zinc-700/30 rounded w-20 animate-pulse"></div>
          <div className="h-3 bg-zinc-700/50 rounded w-16 animate-pulse"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-3 bg-zinc-700/30 rounded w-24 animate-pulse"></div>
          <div className="h-3 bg-zinc-700/50 rounded w-16 animate-pulse"></div>
        </div>
      </div>

      {/* Actions Skeleton */}
      <div className="flex space-x-2">
        <div className="flex-1 h-8 bg-zinc-700/50 rounded-lg animate-pulse"></div>
        <div className="flex-1 h-8 bg-zinc-700/50 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

// Container para múltiples skeletons
export const LicenseListSkeleton = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LicenseCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
};

export const ClientGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({ length: count }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <ClientCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
};

// Skeleton para Stats Cards
export const StatsCardSkeleton = () => {
  return (
    <div className="bg-zinc-900/30 backdrop-blur-xl rounded-lg p-4 border border-zinc-800">
      <div className="space-y-2">
        <div className="h-8 bg-zinc-700/50 rounded w-12 animate-pulse"></div>
        <div className="h-4 bg-zinc-700/30 rounded w-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export const StatsGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <StatsCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
};