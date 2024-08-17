// import { DataLoader } from '@caldwell619/data-loader'
// import { inArray } from 'drizzle-orm'
// import { db, Activity, activityModel } from '@_models'

// export const ActivityLoader = new DataLoader<Activity, string>({
//   async fetcher(ids) {
//     const results = await db.query.activityModel.findMany({ where: inArray(activityModel.id, ids) })
//     return results
//   },
// })
